import React from "react";
import { Item, List, Segment, Icon, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem(){
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' circular src='/assets/user.png' />
              <Item.Content>
                <Item.Header content='Event Title' />
                <Item.Description>Hosted by VML</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name='clock' /> Date
            <Icon name='marker' /> Venue
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            <EventListAttendee />
            <EventListAttendee />
          </List>
        </Segment>
        <Segment clearing>
            <div>Desription of envent</div>
            <Button color='teal' floated='right' content='view' />
        </Segment>
      </Segment.Group>
    );
}