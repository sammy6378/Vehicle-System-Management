
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../store/Store';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = useSelector((state:RootState) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;