import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { db, storage } from "../../firebase";
import { galleryCategories } from "../../siteInfo";
import theme from "../../styles/themes/theme";
import ButtonWithConfirm from "../general/ButtonWithConfirm";

const TextSubmissionsForm = ({ config, folder }) => {
    const [formData, setFormData] = useState(
        JSON.parse(JSON.stringify(config))
    );
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedTextFile, setSelectedTextFile] = useState(null);
    const [previews, setPreviews] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [fileError, setFileError] = useState("false");

    const [isSubmitted, setIsSubmitted] = useState(false);

    const fileInputRef = useRef();
    const textFileInputRef = useRef();

    const handleFieldChange = (e, field, index) => {
        const newFieldData = {
            ...formData.fields[index],
            value: e.target.value,
        };

        let newFormDataFields = formData.fields;
        newFormDataFields[index] = newFieldData;
        setFormData({ ...formData, fields: newFormDataFields });
    };

    const handleImagesChange = (e) => {
        setFileError("false");
        if (e.target.files[0].size > 1097152) {
            setFileError("File size must be less than 1MB");
            return;
        }
        setSelectedImages([...selectedImages, e.target.files[0]]);
        setFileError(false);
        if (e.target.files && e.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (e) => {
                if (previews.includes(e.target.result)) {
                    setFileError("Please select another file");
                } else {
                    setPreviews([...previews, e.target.result]);
                }
            };

            reader.readAsDataURL(e.target.files[0]);
        }
        fileInputRef.current.children[0].value = null;
    };

    const handleTextFileChange = (e) => {
        if (e.target.files[0].size > 1097152) {
            setFileError("File size must be less than 1MB");
            return;
        }
        setSelectedTextFile(e.target.files[0]);
    };

    const handleRemovePreview = (preview) => {
        const newPreviews = previews.filter(
            (myPreview) => myPreview !== preview
        );
        setPreviews(newPreviews);
    };

    const handleRemoveSelectedImage = (index) => {
        const newSelectedImages = selectedImages.splice(index, 1);
        setSelectedImages(newSelectedImages);
    };

    const handleUpload = async () => {
        if (formData.fields[0].value === "") {
            setFileError("Please Enter Your Name");
            return;
        }

        setIsUploading(true);
        if (selectedTextFile) {
            const textStorageRef = ref(
                storage,
                `submissions/${selectedTextFile.name}`
            );
            const uploadTextTask = uploadBytesResumable(
                textStorageRef,
                selectedTextFile
            );

            uploadTextTask.on(
                "state_changed",
                () => {},
                () => {},
                async () => {
                    let textFileURL = "";
                    await getDownloadURL(uploadTextTask.snapshot.ref).then(
                        (downloadURL) => {
                            textFileURL = downloadURL;
                        }
                    );

                    await addDoc(collection(db, folder), {
                        ...formData,
                        id: formData.fields[0].value,
                        textFileURL: textFileURL,
                        fileName: selectedTextFile.name,
                        dateUploaded: Date.now(),
                    });

                    setFormData(JSON.parse(JSON.stringify(config)));
                    setIsUploading(false);
                    setFileError("");
                    setIsSubmitted(true);
                }
            );
        }
    };

    return (
        <Box>
            {!isSubmitted ? (
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        border: "1px solid " + theme.palette.custom.darkMuted,
                        padding: "1em",
                        borderRadius: "5px",
                    }}
                >
                    <Typography variant="h3">
                        Submit a story, article, or poem.
                    </Typography>
                    <Box>
                        <Button
                            variant="outlined"
                            onClick={() => {
                                textFileInputRef.current.children[0].click();
                            }}
                        >
                            select Text File
                        </Button>
                        <Input
                            variant="contained"
                            inputProps={{ accept: ".docx,.doc,.pdf" }}
                            type="file"
                            sx={{ display: "none" }}
                            ref={textFileInputRef}
                            onChange={handleTextFileChange}
                        >
                            Select Text File
                        </Input>
                        <br />
                        {selectedTextFile ? (
                            <Typography variant="caption">
                                {selectedTextFile.name}
                            </Typography>
                        ) : (
                            <Typography variant="caption">
                                .docx, .doc, or .pdf
                            </Typography>
                        )}
                    </Box>
                    {formData.fields.map((field, index) => {
                        return (
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                type={field.type}
                                label={field.name}
                                key={index}
                                multiline={field.multiline}
                                minRows={field.rows}
                                value={field.value}
                                onChange={(e) => {
                                    handleFieldChange(e, field, index);
                                }}
                            />
                        );
                    })}
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <ButtonWithConfirm
                            handleClick={handleUpload}
                            isDisabled={isUploading}
                            buttonText="Upload"
                            dialogText="Are you sure you want to submit?"
                            notificationText="File Uploading..."
                        />
                    </Box>
                </Box>
            ) : (
                <Typography>
                    Thank you for your submission! We will get back to you soon!
                </Typography>
            )}
        </Box>
    );
};

export default TextSubmissionsForm;
