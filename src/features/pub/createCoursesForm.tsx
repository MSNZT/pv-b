"use client";
import {useTransition} from "react";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/shared/ui/form";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {createCourseAction} from "@/features/actions";
import {clsx} from "clsx";

const coursesFormSchema = z.object({
	name: z.string(),
	description: z.string()
})

export const CreateCoursesForm = (
	{
		className,
		revalidatePagePath
	}: {className: string, revalidatePagePath: string}
) => {
	const [isCreateTransition, startCreateTransition] = useTransition();
	const form = useForm<z.infer<typeof coursesFormSchema>>({
		resolver: zodResolver(coursesFormSchema),
		defaultValues: {
			name: '',
			description: ''
		}
	})
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((data) => {
				startCreateTransition(async () => {
					await createCourseAction(data, revalidatePagePath);
				})
			})} className={clsx(className, 'max-w-[350px]')}>
			<FormField
				control={form.control}
				name="name"
				render={({field}) => (
					<FormItem>
						<FormLabel/>
						<FormControl>
							<Input placeholder="Заголовок" {...field} />
						</FormControl>
					</FormItem>
				)}
			/>
				<FormField
					control={form.control}
					name="description"
					render={({field}) => (
						<FormItem>
							<FormLabel/>
							<FormControl>
								<Input placeholder="Описание" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<Button disabled={isCreateTransition} type='submit' className='mt-4'>Добавить</Button>
			</form>
		</Form>
	)
}
