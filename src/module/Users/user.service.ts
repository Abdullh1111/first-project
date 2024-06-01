import config from '../../App/config';
import { TStudent } from '../student/student-interface';
import { StudentModel } from '../student/student-module';
import { TUser } from './user.interface';
import { User } from './user.module';

const createStudentIntoDb = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'student';
  // set manually generated id
  userData.id = '2030100001';
  // create a user

  const result = await User.create(userData);
  // create a student
  if (Object.keys(result).length) {
    studentData.id = result.id;
    studentData.user = result._id;
    const newStudent = StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDb,
};
