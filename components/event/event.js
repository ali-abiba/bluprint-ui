import styles from './event.module.css';
import * as moment from 'moment';

export default class Event extends React.Component {
    render() {
        return (
            <div className={styles.eventCard}>
                <h2>{this.props.event.name}</h2>
                <p>{this.props.event.description}</p>
                <p>When: {moment(this.formatDate(this.props.event.date)).format('MMMM Do YYYY, h:mm:ss a')}</p>
                <p>Where: {this.props.event.location}</p>
            </div>
        )
    }

    formatDate(date) {
        date = date.replace('T', ' ');
        date = date.replace('z', '');
        return date;
    }
}
