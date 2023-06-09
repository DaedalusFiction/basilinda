import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { db, storage } from "../../firebase";
import { galleryCategories } from "../../siteInfo";
import theme from "../../styles/themes/theme";
import ButtonWithConfirm from "../general/ButtonWithConfirm";

const FirebaseUploadForm = ({ config, folder }) => {
    const [formData, setFormData] = useState(
        JSON.parse(JSON.stringify(config))
    );
    const [selectedImages, setSelectedImages] = useState([]);

    const [previews, setPreviews] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [fileError, setFileError] = useState("false");
    const fileInputRef = useRef();

    const [isSubmitted, setIsSubmitted] = useState(false);

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
        if (e.target.files[0].size > 3097152) {
            setFileError("File size must be less than 3MB");
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
        if (selectedImages.length === 0) {
            setFileError("Please Select an Image");
            return;
        }
        if (formData.fields[0].value === "") {
            setFileError("Please Enter a Title");
            return;
        }

        var downloadURLs = [];
        let error = false;

        //check to see if image already exists in storage

        //check if markdown file with file name exists

        //check to see if document with selected Title already exists

        setIsUploading(true);

        selectedImages.forEach(async (image) => {
            const storageRef = ref(storage, `${folder}/${image.name}`);

            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    //to show upload progress as percentage
                    // const progress =
                    //     (snapshot.bytesTransferred / snapshot.totalBytes) *
                    //     100;
                    // setUploadProgress(progress);
                },
                (error) => {
                    // setUploadError(true);
                    console.log(error.message);
                },
                () => {
                    // creates firestore database entry
                    // setUploadProgress(0);
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            downloadURLs = [...downloadURLs, downloadURL];
                            if (downloadURLs.length >= selectedImages.length) {
                                setDoc(
                                    doc(db, folder, formData.fields[0].value),
                                    {
                                        ...formData,
                                        id: formData.fields[0].value,
                                        URLs: downloadURLs,
                                        dateUploaded: Date.now(),
                                    }
                                );
                            }

                            setFormData(JSON.parse(JSON.stringify(config)));
                            setPreviews([]);
                            setSelectedImages([]);
                            setIsUploading(false);
                            setFileError("");
                            setIsSubmitted(true);
                        }
                    );
                }
            );
        });
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
                    <Typography variant="h3">Submit an image</Typography>
                    <Box>
                        <Button
                            variant="outlined"
                            onClick={() => {
                                fileInputRef.current.children[0].click();
                                // fileInputRef.current.click();
                            }}
                        >
                            select Image
                        </Button>
                        <Input
                            variant="contained"
                            inputProps={{ accept: "image/jpeg, image/png" }}
                            type="file"
                            sx={{ display: "none" }}
                            ref={fileInputRef}
                            onChange={handleImagesChange}
                        >
                            Select Image
                        </Input>
                        <br />
                        {selectedImages.length > 0 ? (
                            <Typography variant="caption">
                                {selectedImages[0].name}
                            </Typography>
                        ) : (
                            <Typography variant="caption">
                                .jpg, .png
                            </Typography>
                        )}
                    </Box>
                    {previews.length > 0 && (
                        <Grid container spacing={1}>
                            {previews.map((preview, index) => {
                                return (
                                    <Grid item xs={3} key={index}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: ".5rem",
                                            }}
                                        >
                                            <Image
                                                blurDataURL={preview}
                                                placeholder="blur"
                                                src={preview}
                                                alt="image preview"
                                                width="100px"
                                                height="100px"
                                                layout="responsive"
                                            />
                                            <Button
                                                variant="outlined"
                                                onClick={() => {
                                                    handleRemovePreview(
                                                        preview
                                                    );
                                                    handleRemoveSelectedImage(
                                                        index
                                                    );
                                                }}
                                            >
                                                Remove
                                            </Button>
                                        </Box>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    )}
                    {formData.fields.map((field, index) => {
                        return (
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                type={field.type}
                                color="secondary"
                                label={field.name}
                                key={index}
                                multiline={field.multiline}
                                rows={field.rows}
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
                            dialogText="Are you sure you want to submit this item?"
                            notificationText="File Uploading..."
                        />
                    </Box>
                </Box>
            ) : (
                <Typography>
                    Thank you for your submission! We will get back to you
                    shortly!
                </Typography>
            )}
        </Box>
    );
};

export default FirebaseUploadForm;
