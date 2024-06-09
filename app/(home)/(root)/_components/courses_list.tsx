import { CombinedCourse } from "./combined-course";
import { IndividualCourseHome } from "./individual-course";

export const CoursesList = () => {
  return (
    <div className="mx-14 my-32 justify-center">
      {/* Individual Course */}
      <div className="flex flex-wrap gap-12 md:gap-18">
        <IndividualCourseHome />
        <IndividualCourseHome />
        <IndividualCourseHome />
        <CombinedCourse />
      </div>
    </div>
  );
};
