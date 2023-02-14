import React from 'react'
import Section from '../shared/ui/section';
import { useSelector } from 'react-redux'
import ProjectItem from './project_item/Project_item'
import { Row, Col } from 'react-bootstrap'
import Center from '../shared/ui/Center';

const ProjectList = () => {
    const state = useSelector(state => state.projectReducer.projects)

    return (
        <Section inputMargin="2em"  >
            {
                state.length > 0 ? (
                    <Row xs={1} md={3}>
                        {state.map((item) => (
                            <Col key={item.id} style={{
                                minWidth: '345px',
                                margin: "10px",
                            }}>
                                <ProjectItem projectItem={item} />
                            </Col>
                        ))}
                    </Row>
                )
                    : <Center>Please Create Any Project</Center>
            }
        </Section>
    )
}

export default ProjectList