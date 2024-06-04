import {CreateCoursesForm} from "@/features/pub/createCoursesForm";
import {CoursesList} from "@/features/pub/coursesList";

export default function Home() {
	
	return (
		<main className="p-4">
			<CreateCoursesForm className="mb-4" revalidatePagePath='/' />
			<CoursesList revalidatePagePath='/' />
		</main>
	);
}
