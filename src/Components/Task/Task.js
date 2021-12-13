
 import courses from "../../Data/cources.json";
 
export function getById(id) {
    const course =courses.find(item=>item.id===id);
    return Promise.resolve(course);
}
export default getById