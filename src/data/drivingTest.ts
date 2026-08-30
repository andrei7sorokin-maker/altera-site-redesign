export type DrivingTestOption = {
  id: string;
  text: string;
};

export type DrivingTestQuestion = {
  id: string;
  question: string;
  options: DrivingTestOption[];
  correctOptionId: string;
  explanation: string;
  image?: string;
  imageAlt?: string;
};

// Add the approved questions here. The test becomes active as soon as this list is not empty.
export const drivingTestQuestions: DrivingTestQuestion[] = [];

export const drivingTestConfig = {
  expectedQuestionCount: 10,
  estimatedMinutes: 2,
  isPublished: drivingTestQuestions.length > 0,
};
