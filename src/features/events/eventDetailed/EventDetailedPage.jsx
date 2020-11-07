import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedHeader from './EventDetailHeader';
import EventDetailedSidebar from './EvenyDetailedSidebar';

export default function EventDetailedPage() {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader />
                <EventDetailedInfo/>
                <EventDetailedChat/>
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar />
            </Grid.Column>
        </Grid>
    )
}