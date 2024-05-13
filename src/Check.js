import { useState, useEffect, useCallback } from 'react';

export const useCheck = () => {
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [errors, setErrors] = useState({
    });

    const validateEmail = useCallback(() => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setErrors(prevErrors => ({ ...prevErrors, emailError: 'Please enter a valid email address.' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, emailError: '' }));
        }
    }, [email]);

    const validateFName = useCallback(() => {
        if (!fName) {
            setErrors(prevErrors => ({ ...prevErrors, fNameError: 'Please enter your first name.' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, fNameError: '' }));
        }
    }, [fName]);

    const validateLName = useCallback(() => {
        if (!lName) {
            setErrors(prevErrors => ({ ...prevErrors, lNameError: 'Please enter your last name.' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, lNameError: '' }));
        }
    }, [lName]);

    const validateLocation = useCallback(() => {
        if (!location) {
            setErrors(prevErrors => ({ ...prevErrors, locationError: 'Please select a location.' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, locationError: '' }));
        }
    }, [location]);

    const validateNumber = useCallback(() => {
        if (number.length < 10) {
            setErrors(prevErrors => ({ ...prevErrors, numberError: 'Please enter your phone number.' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, numberError: '' }));
        }
    }, [number]);

    const validateAddress = useCallback(() => {
        if (!address) {
            setErrors(prevErrors => ({ ...prevErrors, addressError: 'Please enter your street address.' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, addressError: '' }));
        }
    }, [address]);

    const validateCity = useCallback(() => {
        if (!city) {
            setErrors(prevErrors => ({ ...prevErrors, cityError: 'Please enter your city.' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, cityError: '' }));
        }
    }, [city]);

    const validateState = useCallback(() => {
        if (!state) {
            setErrors(prevErrors => ({ ...prevErrors, stateError: 'Please enter your state.' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, stateError: '' }));
        }
    }, [state]);

    const validateZip = useCallback(() => {
        if (zip.length < 6) {
            setErrors(prevErrors => ({ ...prevErrors, zipError: 'Please enter your zipcode.' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, zipError: '' }));
        }
    }, [zip]);

    useEffect(() => {
        validateEmail();
        validateLocation();
        validateFName();
        validateLName();
        validateNumber();
        validateAddress();
        validateCity();
        validateState();
        validateZip();
    }, [email, location, fName, lName, number, address, city, state, zip, validateEmail,
        validateLocation, validateFName, validateLName, validateNumber, validateAddress,
        validateCity, validateState, validateZip]);

    return {
        email, setEmail,
        location, setLocation,
        fName, setFName,
        lName, setLName,
        number, setNumber,
        address, setAddress,
        city, setCity,
        state, setState,
        zip, setZip,
        errors
    };
};
