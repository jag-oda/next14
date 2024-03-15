import React, { type FormHTMLAttributes } from "react";


type ReviewFormProps = {
	formAction: FormHTMLAttributes<HTMLFormElement>["action"];

};

const RATING = [1,2,3,4,5]

export const SendReviewForm = ({ formAction}: ReviewFormProps) => {

    return (
        <div>
	<form 
        action={formAction} 
        data-testid="add-review-form" 
    >
            <div className="flex flex-col justify-between">
                <input required placeholder="Review title" name="headline" className="mb-5" />
		        <textarea required placeholder="Review content" name="content" className="mb-5"/>
            </div>
		<div className="my-2">
			<label>
                Rate the product
				<fieldset className="my-2 flex flex-row-reverse justify-end">
					{RATING.map((value) => (
						<React.Fragment key={value}>
							<input
								className="mx-4 h-4 w-4"
								id={`rating-${value}`}
								type="radio"
								key={value}
								value={value}
								name="rating"
								required
							/>
							<label htmlFor={`rating-${value}`} className="cursor-pointer">
								{value}
							</label>
						</React.Fragment>
					))}
				</fieldset>
				<fieldset className="flex flex-row-reverse justify-end"></fieldset>
			</label>
		</div>
        <div className="flex flex-col justify-between">
            <input required placeholder="Name" name="name" className="mb-5" />
		    <input required placeholder="Email" name="email" className="mb-5" />
        </div>
		<button
			type="submit"
			className="mt-4 w-full rounded-md bg-gradient-to-r from-gray-700 to-black py-2 text-center font-semibold text-white opacity-90 transition-all hover:bg-gray-800 hover:opacity-100"
		>
			Submit
		</button>
	</form>
    </div>
)
};