"use client";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/shared/ui/card";
import {CourseListElement} from "../model/types";
import {Button} from "@/shared/ui/button";
import {useTransition} from "react";

export const CourseItem = (
	{course, onDelete, className}:
		{course: CourseListElement, onDelete: () => Promise<void>,
		className: string}
) => {
	const [deleteLoading, setDeleteLoading] = useTransition();
	const handleDelete = () => {
		setDeleteLoading(async () => {
			await onDelete();
		})
	}
	
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle>{course.name}</CardTitle>
				<CardDescription>{course.description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<Button disabled={deleteLoading} onClick={handleDelete}>Удалить</Button>
			</CardFooter>
		</Card>
	
	)
}
