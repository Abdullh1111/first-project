import { Model, Types } from 'mongoose';

// import { Schema, model, connect } from 'mongoose';
export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContaceNo: string;
  motherName: string;
  motherOccupation: string;
  motherContaceNo: string;
};
export type LocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: UserName;
  gender: 'male' | 'female';
  birthdate?: string;
  email: string;
  contactNo: string;
  emergencyNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  presentAddress: string;
  parmanentAddress: string;
  gurdian: Gurdian;
  localGurdian: LocalGurdian;
  profileImg?: string;
  isDeleted: boolean;
};

export type TStudentMethods = {
  isUserExists(id: string): Promise<TStudent | null>;
};
export type TStudentModel = Model<
  TStudent,
  Record<string, never>,
  TStudentMethods
>;
