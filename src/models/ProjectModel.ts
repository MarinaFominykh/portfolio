export interface Tech {
	id: number,
	title: string,
}
export type ProjectModel = {
    id: number,
    src: string,
    title: string,
    techs: Tech[],
    description: string,
    url: string,
    githubUrl: string,
}


