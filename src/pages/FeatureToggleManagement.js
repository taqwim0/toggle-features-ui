import React, { useState, useEffect } from 'react';
import FeatureToggleService from '../services/FeatureToggle';

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
} 

const FeatureToggleManagement = () => {
    const [featureToggles, setFeatureToggles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const loadFeatureToggles = async (page) => {
        try {
            const token = getCookie('token');
            if (!token) {
                console.error("No token found, redirecting to login");
                return;
            }

            const response = await FeatureToggleService.getFeatureToggles(token, page);
            
            if (Array.isArray(response.data.data)) {
                setFeatureToggles(response.data.data)
                setTotalPages(response.data.totalPages)
            }
        } catch (error) {
            console.error("Error loading feature toggles: ", error);
            setFeatureToggles([]);
        }
    };

    useEffect(() => {
        loadFeatureToggles(page);
    }, [page]);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const createFeatureToggle = async () => {
        const name = prompt("Enter feature toggle name:");
        const description = prompt("Enter feature toggle description:");
        const enabled = window.confirm("Enable this feature?");

        try {
            const token = localStorage.getItem('token');
            await FeatureToggleService.createFeatureToggle({ name, description, enabled }, token);
            loadFeatureToggles();
        } catch (error) {
            console.error("Error creating feature toggle: ", error);
        }
    };

    const updateFeatureToggle = async (id) => {
        const name = prompt("Enter new feature toggle name:");
        const description = prompt("Enter new feature toggle description:");
        const enabled = window.confirm("Enable this feature?");

        try {
            const token = localStorage.getItem('token');
            await FeatureToggleService.updateFeatureToggle(id, { name, description, enabled }, token);
            loadFeatureToggles();
        } catch (error) {
            console.error("Error updating feature toggle: ", error);
        }
    };

    const deleteFeatureToggle = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await FeatureToggleService.deleteFeatureToggle(id, token);
            loadFeatureToggles();
        } catch (error) {
            console.error("Error deleting feature toggle: ", error);
        }
    };

    return (
        <div>
            <h2>Feature Toggle Management</h2>
            <button onClick={createFeatureToggle}>Add Feature Toggle</button>
            <br/><br/>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Enabled</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(featureToggles) && featureToggles.length > 0 ? (
                        featureToggles.map(toggle => (
                            <tr key={toggle.id}>
                                <td>{toggle.name}</td>
                                <td>{toggle.description}</td>
                                <td>{toggle.enabled ? "Yes" : "No"}</td>
                                <td>
                                    <button onClick={() => updateFeatureToggle(toggle.id)}>Edit</button>
                                    <button onClick={() => deleteFeatureToggle(toggle.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No feature toggles found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <br/>
            <div>
                <button onClick={handlePreviousPage} disabled={page <= 1}>Previous</button>
                <span> Page {page} of {totalPages} </span>
                <button onClick={handleNextPage} disabled={page >= totalPages}>Next</button>
            </div>
        </div>
    );
};

export default FeatureToggleManagement;