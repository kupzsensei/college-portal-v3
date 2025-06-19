export const BASE_URL = "http://172.17.2.133:8000";

export const getStudents = async () => {
  const response = await fetch(`${BASE_URL}/api/students/`);
  const res = await response.json();
  console.log(res);
  return res;
};

/**
 * This is an API Functions
 * it returns a array of objects
 * @returns {Promise <Array<{id:1 , name: "male"},{id:2 , name: "female"}>>}
 * @example
 * // Example usage:
 * getGenders()
 * .then(genders => {
 * console.log(genders);
 * // Output: [{id: 1, name: "male"}, {id: 2, name: "female"}]
 * })
 */
export const getGenders = async () => {
  const response = await fetch(`${BASE_URL}/api/gender/`);
  const res = await response.json();
  console.log(res);
  return res;
};
