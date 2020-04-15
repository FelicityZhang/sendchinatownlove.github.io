import * as React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Modal from '../Modal';

interface Props {
  imageSrc: string;
  className?: string;
  amountRaised: number;
  targetAmount: number;
  acceptDonations:boolean;
  sellGiftCard: boolean;
}

interface State {
  show: boolean;
  purchaseType: string;
}

const ModalBox: any = Modal;

class OwnerPanel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // these will be props fix throughout when passed thru
      show: false,
      purchaseType: '',
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(event: any) {
    let button = event.target.value;
    this.setState({ show: true, purchaseType: button });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <section className={classnames(styles.container, this.props.className)}>
        <figure className={styles.ownerContainer}>
          <img
            className={styles.ownerImage}
            src={this.props.imageSrc}
          />
        </figure>

        {this.props.targetAmount && this.props.amountRaised && (
          <div className={styles.progressContainer}>
            <div className={classnames(styles.progressBar, 'progress-bar')}>
              <div
                className={styles.myBar}
                style={{
                  width: `${
                    (this.props.amountRaised / this.props.targetAmount) * 100
                  }%`,
                }}
              >
                {' '}
              </div>
            </div>
            <div>
              ${this.props.amountRaised} of ${this.props.targetAmount}
            </div>
          </div>
        )}

        {this.props.acceptDonations && this.props.sellGiftCard && <div className={styles.buttonContainer}>
          <button
            value="donation"
            className={classnames(styles.button, 'button--filled')}
            onClick={this.showModal}
          >
            Donate
          </button>
          <button
            value="gift-card"
            className={classnames(styles.button, 'button--outlined')}
            onClick={this.showModal}
          >
            Gift Card
          </button>
        </div>}

        <ModalBox
          show={this.state.show}
          handleClose={this.hideModal}
          purchaseType={this.state.purchaseType}
        />

        {/* hide extra info section until needed */}
        {/* <div className={styles.summaryContainer}>
          <div>
            <span className={styles.storeSummaryLabel}>Type: </span>
            <span>Family-owned and operated</span>
          </div>{' '}
          <br />
          <div>
            <span className={styles.storeSummaryLabel}>Employees: </span>
            <span>5</span>
          </div>{' '}
          <br />
          <div>
            <span className={styles.storeSummaryLabel}>Runaway: </span>
            <span>3 months</span>
          </div>{' '}
          <br />
          <div>
            <span className={styles.storeSummaryLabel}>Breakeven: </span>
            <span>$1000 / month</span>
          </div>
        </div> */}

        {/* hide social links until needed */}
        {/* <div className={styles.socialContainer}>
          <a href="#" className={classnames(styles.fa, 'fa fa-twitter')} />
          <a href="#" className={classnames(styles.fa, 'fa fa-instagram')} />
          <a href="#" className={classnames(styles.fa, 'fa fa-facebook')} />
          <a href="#" className={classnames(styles.fa, 'fa fa-youtube')} />
        </div> */}

        <div className={styles.mapsContainer}>
          {/* need to put in google API */}
          {/* might need to use a react lib since it uses script tags */}
          {/* https://www.npmjs.com/package/google-map-react */}
        </div>
      </section>
    );
  }
}

export default OwnerPanel;
