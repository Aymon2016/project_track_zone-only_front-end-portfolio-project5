import React from 'react'
import Section from '../shared/ui/section';
import { useSelector } from 'react-redux'
import ProjectItem from './project_item/Project_item'
import { Stack } from "@mui/system";
import Center from '../shared/ui/Center';

const ProjectList = () => {
    const state = useSelector(state => state.projectReducer.projects)

    return (
        <Section inputMargin="2em"  >
            {
                state.length > 0 ? (
                    <Stack direction={'row'} spacing={2}>
                        {state.map((item) => (

                            <ProjectItem key={item.id} projectItem={item} />

                        ))}
                    </Stack>
                )
                    : <Center>Please Create Any Project</Center>
            }
        </Section>
    )
}

export default ProjectList