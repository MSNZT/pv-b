"use server";
import {CreateCourseListElementCommand} from "@/features/model/types";
import {coursesRepository} from "@/features/courses.repository";
import {revalidatePath} from "next/cache";

export const createCourseAction = async (
	command: CreateCourseListElementCommand,
	revalidatePagePath: string
) => {
	await coursesRepository.createCourseElement(command);
	revalidatePath(revalidatePagePath);
}
