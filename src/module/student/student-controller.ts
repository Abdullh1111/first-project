import { RequestHandler } from 'express';
import { studentService } from './student-service';
import sendResponse from '../../App/utils/response';
import httpStatus from 'http-status';

const getAllStudent: RequestHandler = async (req, res, next) => {
  try {
    const result = await studentService.getAllStudentIntoDb();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'successfully retrived students profile',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleStudent: RequestHandler = async (req, res, next) => {
  try {
    const Id = req.params.id;
    const result = await studentService.getSingleStudentIntoDb(Id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'successfully retrived students profile',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteStudent: RequestHandler = async (req, res, next) => {
  try {
    const Id = req.params.id;
    const result = await studentService.deleteStudentIntoDb(Id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'successfully deleted students profile',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const studentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
