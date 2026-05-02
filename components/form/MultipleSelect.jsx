"use client";
import {
	Combobox,
	ComboboxChip,
	ComboboxChips,
	ComboboxChipsInput,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxItem,
	ComboboxList,
	ComboboxValue,
	useComboboxAnchor,
} from "@/components/ui/combobox";
import React from "react";

const MultipleSelect = ({ options, ...props }) => {
	const anchor = useComboboxAnchor();

	return (
		<Combobox
			{...props}
			multiple
			autoHighlight
			items={options}
			defaultValue={[options[0]]}
		>
			<ComboboxChips
				ref={anchor}
				className="w-full"
			>
				<ComboboxValue>
					{(values) => (
						<React.Fragment>
							{values.map((value) => (
								<ComboboxChip key={value}>{value}</ComboboxChip>
							))}
							<ComboboxChipsInput />
						</React.Fragment>
					)}
				</ComboboxValue>
			</ComboboxChips>
			<ComboboxContent anchor={anchor}>
				<ComboboxEmpty>No items found.</ComboboxEmpty>
				<ComboboxList>
					{(item) => (
						<ComboboxItem
							key={item}
							value={item}
						>
							{item}
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	);
};

export default MultipleSelect;
