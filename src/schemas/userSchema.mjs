const userSchema = new mongoose.Schema({
    userId: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Store hashed passwords only
    notes: [
        {
            title: { type: String, required: true },
            content: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now },
        }
    ]
});

const User = mongoose.model('User', userSchema);
export default User;