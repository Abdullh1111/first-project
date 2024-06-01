import { TStudent } from './student-interface';
import { StudentModel } from './student-module';

const createStudentIntoDb = async (studentData: TStudent) => {
  // const result = await StudentModel.create(student);
  const student = new StudentModel(studentData);
  if (await student.isUserExists(studentData.id)) {
    throw new Error('user already exists');
  }
  const result = student.save();
  return result;
};

const getAllStudentIntoDb = async () => {
  const result = await StudentModel.find({ isDeleted: false });
  return result;
};
const getSingleStudentIntoDb = async (id: string) => {
  const result = await StudentModel.findOne({ id, isDeleted: false });
  return result;
};
const deleteStudentIntoDb = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });

  return result;
};
export const studentService = {
  createStudentIntoDb,
  getAllStudentIntoDb,
  getSingleStudentIntoDb,
  deleteStudentIntoDb,
};
