import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true },
});

const passwordValidator = (password, username) => {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const consecutiveSequence = /(.)\1\1/;

  const usernameCheck = new RegExp(username, 'i');

  const isStrongPassword = strongPasswordRegex.test(password);
  const hasConsecutiveSequence = consecutiveSequence.test(password);
  const containsUsername = usernameCheck.test(password);

  return isStrongPassword && !hasConsecutiveSequence && !containsUsername;
}

const usernameRegex = /^[A-Za-z0-9]{3,15}$/;

UserSchema.path('username').validate(function (username) {
  return usernameRegex.test(username);
});

UserSchema.path("password").validate(passwordValidator);

UserSchema.methods.comparePassword = async function (passw) { 
  return await bcrypt.compare(passw, this.password); 
}


UserSchema.statics.findByUserName = function (username) {
  return this.findOne({ username: username });
};

UserSchema.pre('save', async function(next) {
  const saltRounds = 10; // You can adjust the number of salt rounds
  //const user = this;
  if (this.isModified('password') || this.isNew) {
    try {
      const hash = await bcrypt.hash(this.password, saltRounds);
      this.password = hash;
      next();
  } catch (error) {
     next(error);
  }

  } else {
      next();
  }
});

export default mongoose.model('User', UserSchema);