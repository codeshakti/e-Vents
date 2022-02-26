import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventListItem from "./EventListItem";

const EventDashboard = () => {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList />
        </Grid.Column>
        <Grid.Column width={6}>
        </Grid.Column>
      </Grid>
    );
}

export default EventDashboard;