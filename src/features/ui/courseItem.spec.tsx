import {CourseItem} from "@/features/ui/courseItem";
import {render, screen} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event/";

describe("CourseItem", () => {
	it("should render correctly", async () => {
		const onDelete = jest.fn();
		render(<CourseItem
			course={{
				id: '1',
				name: 'Head',
				description: 'desc'
			}}
			onDelete={onDelete}
			className={''}
		/>);
		await userEvent.click(screen.getByText('Удалить'));
		expect(onDelete).toHaveBeenCalled();
	})
})
