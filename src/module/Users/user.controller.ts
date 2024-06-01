import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../App/utils/response';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await UserService.createStudentIntoDb(password, studentData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'successfully created student profile',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const userController = {
  createStudent,
};
