import { Column } from "@tanstack/react-table";

import { RiFilterLine } from "react-icons/ri";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DropDownFilters<TData, TValue> {
    column?: Column<TData, TValue>;
    title?: string;
    options: {
        label: string;
        value: string;
    }[];
}

export function DropDownFilters<TData, TValue>({ column, title, options }: DropDownFilters<TData, TValue>) {
    const facets = column?.getFacetedUniqueValues();
    const selectedValues = new Set(column?.getFilterValue() as string[]);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 border-dashed">
                    <RiFilterLine className="w-4 h-4 mr-2" />
                    {title}
                </Button>
            </PopoverTrigger>
            {selectedValues?.size > 0 && (
                <div className="space-x-1 lg:flex pt-2">
                    {options
                        .filter(option => selectedValues.has(option.value))
                        .map(option => (
                            <Badge variant="secondary" key={option.value} className="px-1 font-normal rounded-sm">
                                {option.label}
                            </Badge>
                        ))}
                </div>
            )}
            <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                    <CommandInput placeholder={title} className="pr-2 font-normal text-medium" />
                    <CommandList>
                        <CommandEmpty>نتیجه ایی یافت نشد !</CommandEmpty>
                        <CommandGroup>
                            {options.map(option => {
                                const isSelected = selectedValues.has(option.value);
                                return (
                                    <CommandItem
                                        key={option.value}
                                        onSelect={() => {
                                            if (isSelected) {
                                                selectedValues.delete(option.value);
                                            } else {
                                                selectedValues.add(option.value);
                                            }
                                            const filterValues = Array.from(selectedValues);
                                            column?.setFilterValue(filterValues.length ? filterValues : undefined);
                                        }}
                                        className=""
                                    >
                                        <div className="ml-6 text-lg">
                                            {isSelected ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                                        </div>
                                        <span>{option.label}</span>

                                        {/* This part adds a number at the end of dropdown row */}
                                        {facets?.get(option.value) && (
                                            <span className="flex items-center justify-center w-4 h-4 mr-auto font-mono text-xs">
                                                {facets.get(option.value)}
                                            </span>
                                        )}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                        {selectedValues.size > 0 && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <CommandItem
                                        onSelect={() => column?.setFilterValue(undefined)}
                                        className="justify-center text-center"
                                    >
                                        Clear filters
                                    </CommandItem>
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
