import './UserInfoForm.css';

const UserInfoForm = (props) => {
    const { label, type, handleChange, error, value } = props;
    return (
        <div className="user-info-form">
            <label>{label}</label>
            <input 
                type={type}  
                onChange={handleChange} 
                value={value}
            />
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default UserInfoForm;