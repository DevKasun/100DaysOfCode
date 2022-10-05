import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface TodoState {
	id: string;
	description: string;
	completed: boolean;
}

const initialState = [] as TodoState[];
