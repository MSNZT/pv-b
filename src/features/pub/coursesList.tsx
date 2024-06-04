import {CourseItem} from "@/features/ui/courseItem";
import {coursesRepository} from "../courses.repository";
import {revalidatePath} from "next/cache";

export const CoursesList = async (
	{revalidatePagePath}: {revalidatePagePath: string}
) => {
	const courses = await coursesRepository.getCoursesList();
	
	const handleDeleteAction = async (courseId: string) => {
		'use server';
		
		await coursesRepository.deleteCourseElement({id: courseId});
		revalidatePath(revalidatePagePath);
	}
	
	return (
		<div className={'max-w-[350px]'}>
			{courses.map(course =>
				<CourseItem
					key={course.id}
					course={course}
					onDelete={() => handleDeleteAction(course.id)}
					className='mb-4'
				/>
			)}
		</div>
	)
}
