import { Schema, model } from 'mongoose';
import {
  Gurdian,
  LocalGurdian,
  TStudent,
  TStudentMethods,
  TStudentModel,
  UserName,
} from './student-interface';
const userSchema = new Schema<UserName>({
  firstName: { type: String, required: true, trim: true },
  middleName: String,
  lastName: { type: String, required: true },
});
const gurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContaceNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContaceNo: { type: String, required: true },
});
const localGurdianSchema = new Schema<LocalGurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});
const studentSchema = new Schema<TStudent, TStudentModel, TStudentMethods>({
  id: {
    type: String,
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'user id is required'],
    unique: true,
    ref: 'user',
  },
  name: {
    type: userSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  birthdate: String,
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: true },
  emergencyNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  },
  presentAddress: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  gurdian: {
    type: gurdianSchema,
    required: true,
  },
  localGurdian: {
    type: localGurdianSchema,
    required: true,
  },
  profileImg: String,
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
studentSchema.methods.isUserExists = async function (id: string) {
  const existingUser = await StudentModel.findOne({ id });
  return existingUser;
};

export const StudentModel = model<TStudent, TStudentModel>(
  'student',
  studentSchema,
);
