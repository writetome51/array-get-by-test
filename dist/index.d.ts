import { IValueIndexPair } from 'value-index-pair-interface/IValueIndexPair';


export declare function getByTest(
	testFunction: (currentValue: any, currentIndex?: number, array?: any[]) => boolean,
	array: any[]
): IValueIndexPair[];
