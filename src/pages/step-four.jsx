import { useRef } from "react";
import { usePersistentForm } from "../hooks/usePersistentForm";
import { useNavigate } from "react-router-dom";

export default function StepFour() {
  const navigate = useNavigate(); // added
  const academicYearRef = useRef(null);
  const programToEnrollRef = useRef(null);
  const applicationTypeRef = useRef(null);
  const enrollmentStatusRef = useRef(null);
  const modeOfLearningRef = useRef(null);

  const persistentFields = {
    academicYearRef,
    programToEnrollRef,
    applicationTypeRef,
    enrollmentStatusRef,
    modeOfLearningRef,
  };

  usePersistentForm({ refs: persistentFields });

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      // step-one
      student: {
        first_name: localStorage.getItem("firstNameRef"),
        last_name: localStorage.getItem("lastNameRef"),
        middle_name: localStorage.getItem("middleNameRef"),
        birth_date: localStorage.getItem("birthDateRef"),
        gender: localStorage.getItem("genderRef"),
        nationality: localStorage.getItem("nationalityRef"),
        religion: localStorage.getItem("religionRef"),
        contact_number: localStorage.getItem("contactNumberRef"),
        email: localStorage.getItem("emailAddressRef"),
        address: localStorage.getItem("addressRef"),
        bith_place: localStorage.getItem("placeOfBirthRef"),
        lrn_number: localStorage.getItem("lrnNumberRef"),
      },

      // step-two
      guardian_information: {
        full_name: localStorage.getItem("guardianNameRef"),
        relationship: localStorage.getItem("guardianRelationshipRef"),
        contact_number: localStorage.getItem("guardianContactRef"),
        address: localStorage.getItem("guardianAddressRef"),
      },

      // step-three
      educational_background: {
        highschool_name: localStorage.getItem("schoolAttendedRef"),
        strand: localStorage.getItem("shStrandRef"),
        year_graduated: localStorage.getItem("yearGraduatedRef"),
        general_average: localStorage.getItem("generalAverageRef"),
        school_address: localStorage.getItem("schoolAddressRef"),
      },

      // step-four
      enrollment: {
        academic_year: localStorage.getItem("academicYearRef"),
        type: localStorage.getItem("applicationTypeRef"),
        status: localStorage.getItem("enrollmentStatusRef"),
        mode_of_learning: localStorage.getItem("modeOfLearningRef"),
        course: 2,
      },
    };
    // alert("You are enrolled!");
    // academicYearRef.current.value = "";

    // navigate("/create-student"); // redirect to /create-student
    // localStorage.clear(); // clear local storage
    console.log("postData", postData);
  };

  return (
    <form className="w-full max-w-[1000px] mx-auto shadow-2xl bg-white shadow-xl/30 border border-gray-300 p-6 rounded-2xl">
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Academic Year / Semester
          </label>
          <input
            ref={academicYearRef}
            className="appearance-none block w-full  rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="date"
          />
        </div>

        <div className="w-full md:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Program to Enroll
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full rounded-sm border border-gray-400 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              ref={programToEnrollRef}
            >
              <option value="1">BS</option>
              <option value={"2"}>MA</option>
              <option value={"2"}>Nursing</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Type of Applicant
          </label>
          <div className="relative">
            <select
              ref={applicationTypeRef}
              className="block appearance-none w-full rounded-sm border border-gray-400 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Freshman</option>
              <option>Transferee</option>
              <option>Returning Student</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Enrollment Status
          </label>
          <div className="relative">
            <select
              ref={enrollmentStatusRef}
              className="block appearance-none w-full rounded-sm border border-gray-400 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Full-time</option>
              <option>Part-time</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Mode of Learning
          </label>
          <div className="relative">
            <select
              ref={modeOfLearningRef}
              className="block appearance-none w-full rounded-sm border border-gray-400 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Face-to-face</option>
              <option>Online</option>
              <option>Hybrid</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse">
        <button
          onClick={handleSubmit}
          className="mt-4 hover:bg-white hover:text-cyan-700 border hover:border-cyan-700 text-white bg-cyan-700 rounded md:rounded-lg p-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
