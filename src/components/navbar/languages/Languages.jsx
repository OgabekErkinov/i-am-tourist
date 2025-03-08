import { Box, Stack } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import { languages } from '../../../Database/db';
import LanguageButton from './LanguageButton';

const Languages = () => {
    const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
    const [openLanguages, setOpenLanguages] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenLanguages(false);
            }
        };

        if (openLanguages) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openLanguages]);

    return (
        <Stack height="auto" mx="0.2rem" position="relative" ref={menuRef}>
            <Box borderRadius="0.5rem">
                <LanguageButton
                    language={currentLanguage}
                    setOpen={setOpenLanguages}
                    setCurrentLanguage={setCurrentLanguage}
                    color="#FFFFFF"
                    border="none"
                />
            </Box>

            {/* Drop-down menu */}
            <Box
                height="auto"
                width="140px"
                position="absolute"
                top={65}
                zIndex={9999}
                borderRadius="5px"
                overflow="hidden"
                sx={{
                    display: openLanguages ? "block" : "none",
                    opacity: openLanguages ? 1 : 0,
                    transform: openLanguages ? "translateY(0px)" : "translateY(-10px)",
                    transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out"
                }}
            >
                <Stack
                    height="100%"
                    width="100%"
                    bgcolor="#FFFFFF"
                    alignItems="start"
                    boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
                >
                    {languages.map((language, idx) => (
                        <LanguageButton
                            key={idx}
                            language={language}
                            setOpen={setOpenLanguages}
                            setCurrentLanguage={setCurrentLanguage}
                            color="#1F2937"
                            border="0.5px solid #ededed"
                        />
                    ))}
                </Stack>
            </Box>
        </Stack>
    );
};

export default Languages;
