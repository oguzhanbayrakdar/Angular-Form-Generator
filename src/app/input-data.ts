export const InputDatas: InputData[] = [
	{
		type: 'button',
		name: 'Button',
		icon: 'fas fa-stop',
		attributes: {
			id: "fgButton1",
			name: "fgButton1",
			value: "Button"
		},
		otherAttributes: {
			disabled: false
		}
	}, {
		type: 'checkbox',
		name: 'Checkbox',
		icon: 'fas fa-check-square',
		attributes: {
			id: "fgCheckbox1",
			name: "fgCheckbox1",
			value: "false",
		},
		otherAttributes: {
			checked: false,
			disabled: false,
		}
	}, {
		type: 'color',
		name: 'Color',
		icon: 'fas fa-fill',
		attributes: {
			id: "fgColor1",
			name: "fgColor1",
			value: "#000",
		},
		otherAttributes: {
			autocomplete: "",
			disabled: false,
			list: "",
		}
	}, {
		type: 'date',
		name: 'Date',
		icon: 'fas fa-calendar',
		attributes: {
			id: "fgDate1",
			name: "fgDate1",
		},
		otherAttributes: {
			value: "",
			min: "",
			max: "",
			step: "",
			disabled: false,
			readonly: false,
			autocomplete: "",
			list: "",
		}
	}, {
		type: 'datetime-local',
		name: 'Datetime Local',
		icon: 'fas fa-calendar',
		attributes: {
			id: "fgDateTimeLocal1",
			name: "fgDateTimeLocal1",
			disabled: false
		},
		otherAttributes: {
			value: "",
			min: "",
			max: "",
			step: "",
			readonly: false,
			autocomplete: "",
			list: "",
		}
	}, {
		type: 'email',
		name: 'Email',
		icon: 'fas fa-envelope',
		attributes: {
			id: "fgEmail1",
			name: "fgEmail1",
			disabled: false,
			placeholder: "Enter an Email Address"
		},
		otherAttributes: {
			required: false,
			value: "",
			pattern: "",
			readonly: false,
			multiple: "",
			minlength: "",
			maxlength: "",
			autocomplete: "",
			list: "",
			size: ""
		}
	}, {
		type: 'file',
		name: 'File',
		icon: 'fas fa-file',
		attributes: {
			id: "fgFile1",
			name: "fgFile1",
			disabled: false
		},
		otherAttributes: {
			required: false,
			accept: "",
			capture: "",
			multiple: false
		}
	}, {
		type: 'hidden',
		name: 'Hidden',
		icon: 'fas fa-mask',
		attributes: {
			id: "fgHidden1",
			name: "fgHidden1",
			value: ""
		}
	}, {
		type: 'month',
		name: 'Month',
		icon: 'fas fa-calendar',
		attributes: {
			id: "fgMonth1",
			name: "fgMonth1",
			disabled: false
		},
		otherAttributes: {
			value: "",
			max: "",
			min: "",
			step: "",
			readonly: false,
			list: "",
			autocomplete: ""
		}
	}, {
		type: 'number',
		name: 'Number',
		icon: 'fas fa-calculator',
		attributes: {
			id: "fgNumber1",
			name: "fgNumber1",
			disabled: false
		},
		otherAttributes: {
			value: "",
			placeholder: "",
			max: "",
			min: "",
			step: "",
			readonly: false,
			list: "",
			autocomplete: ""
		}
	}, {
		type: 'password',
		name: 'Password',
		icon: 'fas fa-key',
		attributes: {
			id: "fgPassword1",
			name: "fgPassword1",
			disabled: false,
			placeholder: "Enter your password"
		},
		otherAttributes: {
			required: false,
			value: "",
			pattern: "",
			readonly: false,
			minlength: "",
			maxlength: "",
			autocomplete: "",
			size: ""
		}
	}, {
		type: 'radio',
		name: 'Radio',
		icon: 'fas fa-check-circle',
		attributes: {
			id: "fgRadio1",
			name: "fgRadio1",
			disabled: false
		},
		otherAttributes: {
			checked: false,
			value: "",
			required: false
		}
	}, {
		type: 'range',
		name: 'Range',
		icon: 'fas fa-exchange',
		attributes: {
			id: "fgRange1",
			name: "fgRange1",
			disabled: false
		},
		otherAttributes: {
			value: "",
			min: "",
			max: "",
			step: ""
		}
	}, {
		type: 'reset',
		name: 'Reset',
		icon: 'fas fa-power-off',
		attributes: {
			id: "fgReset1",
			name: "fgReset1",
			disabled: false
		},
		otherAttributes: {
			value: ""
		}
	}, {
		type: 'search',
		name: 'Search',
		icon: 'fas fa-search',
		attributes: {
			id: "fgSearch1",
			name: "fgSearch1",
			placeholder: "Type something to search...",
			disabled: false
		},
		otherAttributes: {
			required: false,
			value: "",
			pattern: "",
			minlength: "",
			maxlength: "",
			autocomplete: "",
			list: "",
			size: ""
		}
	}, {
		type: 'submit',
		name: 'Submit',
		icon: 'fas fa-paper-plane',
		attributes: {
			id: "fgSubmit1",
			name: "fgSubmit1",
			value: "Submit",
			disabled: false
		},
		otherAttributes: {
		}
	}, {
		type: 'tel',
		name: 'Tel',
		icon: 'fas fa-phone',
		attributes: {
			id: "fgTel1",
			name: "fgTel1",
			disabled: false
		},
		otherAttributes: {
			readonly: false,
			value: "",
			pattern: "",
			minlength: "",
			maxlength: "",
			autocomplete: "",
			list: "",
			size: ""
		}
	}, {
		type: 'text',
		name: 'Text',
		icon: 'fas fa-text',
		attributes: {
			id: "fgText1",
			name: "fgText1",
			disabled: false
		},
		otherAttributes: {
			readonly: false,
			value: "",
			pattern: "",
			minlength: "",
			maxlength: "",
			autocomplete: "",
			list: "",
			size: ""
		}
	}, {
		type: 'time',
		name: 'Time',
		icon: 'fas fa-calendar',
		attributes: {
			id: "fgTime1",
			name: "fgTime1",
			disabled: false
		},
		otherAttributes: {
			readonly: false,
			value: "",
			min: "",
			max: "",
			step: "",
			list: "",
			autocomplete: ""
		}
	}, {
		type: 'url',
		name: 'Url',
		icon: 'fas fa-external-link',
		attributes: {
			id: "fgUrl1",
			name: "fgUrl1",
			disabled: false
		},
		otherAttributes: {
			placeholder: "",
			readonly: false,
			required: false,
			value: "",
			pattern: "",
			minlength: "",
			maxlength: "",
			autocomplete: "",
			list: "",
			size: ""
		}
	}, {
		type: 'week',
		name: 'Week',
		icon: 'fas fa-calendar',
		attributes: {
			id: "fgWeek1",
			name: "fgWeek1",
			disabled: false
		},
		otherAttributes: {
			readonly: false,
			value: "",
			step: "",
			autocomplete: "",
			list: "",
		}
	}]

export type InputData = {
	type: string,
	name: string,
	icon: string,
	attributes: any,
	otherAttributes?: any
}