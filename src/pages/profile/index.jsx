import { useAuth } from "../../contexts/AuthContext";
import './Profile.css'; // Asegúrate de importar el archivo CSS

const Profile = () => {
  const { currentUser } = useAuth();
  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <main className="profile-main">
      <div className="profile-container">
        <h1 className="profile-title">Perfil de Usuario</h1>

        <div className="profile-info">
          <p className="profile-info-text">
            <strong>Email:</strong> {currentUser.email}
          </p>
          <p className="profile-info-text">
            <strong>ID:</strong> {currentUser.userId}
          </p>
        </div>

        <button className="logout-button" onClick={logout}>Cerrar sesión</button>
      </div>
    </main>
  );
};

export default Profile;