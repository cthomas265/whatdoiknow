import React from "react";
import { Grid, Stack, Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

const Project = () => {
    const theme = useMantineTheme();

    return (
        <div id="explore-my-world">   
            <h1>Project</h1>
            
            <Grid justify='center' >
                <Grid.Col span={4}> 
                    <Stack spacing="lg">             
                        <div style={{ width: 340, margin: 'auto' }}>
                            <Card shadow="sm" p="lg">
                                <Card.Section>
                                <Image src="./portfolio.png" height={160} alt="portfolio" />
                                </Card.Section>
                                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Original Portfolio</Text>
                                <Badge color="pink" variant="light">
                                    Advanced CSS
                                </Badge>
                                </Group>
                                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                                    <a href="https://github.com/cthomas265/Tubthumping">
                                        Github Repo
                                    </a>
                                </Button>
                            </Card>
                        </div>
                        <div style={{ width: 340, margin: 'auto' }}>
                            <Card shadow="sm" p="lg">
                                <Card.Section>
                                <Image src="./meeting.jpg" height={160} alt="Group Meeting" />
                                </Card.Section>
                                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Code Refactoring</Text>
                                <Badge color="pink" variant="light">
                                html/css/git
                                </Badge>
                                </Group>
                                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                                    <a href="https://cthomas265.github.io/Loving-all-my-flaws/">
                                    Horiseon
                                    </a>
                                </Button>
                            </Card>
                        </div>
                        <div style={{ width: 340, margin: 'auto' }}>
                            <Card shadow="sm" p="lg">
                                <Card.Section>
                                <Image src="./stars.png" height={160} alt="NASA/TIME IN HISTORY" />
                                </Card.Section>
                                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Group Project 1</Text>
                                <Badge color="pink" variant="light">
                                Front-End
                                </Badge>
                                </Group>
                                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                                    <a href="https://safteydav3.github.io/on-this-day/">
                                    Deployed Site
                                    </a>
                                </Button>
                            </Card>
                        </div>
                    </Stack>
                </Grid.Col>

                <Grid.Col span={4}>
                    <Stack spacing="lg">
                        <div style={{ width: 340, margin: 'auto' }}>
                            <Card shadow="sm" p="lg">
                                <Card.Section>
                                <Image src="./mvc.jpg" height={160} alt="Group Meeting" />
                                </Card.Section>
            
                                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Group Project 2</Text>
                                <Badge color="pink" variant="light">
                                Full Stack
                                </Badge>
                                </Group>
            
                                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                                    <a href="https://damp-hamlet-43644.herokuapp.com/">
                                    Heroku Deployed Site
                                    </a>
                                </Button>
                            </Card>
                        </div>
            
                        <div style={{ width: 340, margin: 'auto' }}>
                            <Card shadow="sm" p="lg">
                                <Card.Section>
                                <Image src="./9-5.png" height={160} title="video"/>
                                </Card.Section>
            
                                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Employee Tracker</Text>
                                <Badge color="pink" variant="light">
                                    MySQL
                                </Badge>
                                </Group>
            
                                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                                    <a  href="https://github.com/cthomas265/9-5">
                                        GitHub Repo
                                    </a>
                                </Button>
                            </Card>
                        </div>
            
                        <div style={{ width: 340, margin: 'auto' }}>
                            <Card shadow="sm" p="lg">
                                <Card.Section>
                                <iframe src="https://giphy.com/embed/Az1CJ2MEjmsp2" title="Tumbleweed rolling"/>
                                </Card.Section>
            
                                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Project 3</Text>
                                <Badge color="pink" variant="light">
                                    MERN/React
                                </Badge>
                                </Group>
            
                                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                                <a  href="https://github.com/cthomas265/Reading-Raindbow">
                                    Coming soon!
                                </a>
                                </Button>
                            </Card>
                        </div>
                    </Stack>
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default Project;