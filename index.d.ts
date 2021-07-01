import "googlemaps"
import * as React from "react"

interface IGoogleApiOptions {
	apiKey: string
	libraries?: string[]
	client?: string
	url?: string
	version?: string
	language?: string
	region?: string
	LoadingContainer?: any
}
type GoogleApiOptionsFunc = (props: any) => IGoogleApiOptions

type Omit<T1, T2> = Pick<T1, Exclude<keyof T1, keyof T2>>

export type GoogleAPI = typeof google
export function GoogleApiHoc(
	opts: IGoogleApiOptions | GoogleApiOptionsFunc,
): <TProps extends IProvidedProps>(
	ctor: React.ComponentType<TProps>,
) => React.ComponentType<Omit<TProps, IProvidedProps>>

export interface IProvidedProps {
	google: GoogleAPI
	loaded?: boolean
}
