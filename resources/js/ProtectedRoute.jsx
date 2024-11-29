import { useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import api from './api';

const ProtectedRoute = ({ children }) => {
    useEffect(() => {
        const checkAuth = async () => {
            try {
                await api.get('/user', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
                    },
                }); // Validate user
            } catch (error) {
                localStorage.removeItem('auth_token');
                Inertia.visit('/login'); // Redirect to login if unauthorized
            }
        };

        checkAuth();
    }, []);

    return <>{children}</>; // Render children if authenticated
};

export default ProtectedRoute;
