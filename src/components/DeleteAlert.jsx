"use client";
import {AlertDialog, Button} from "@heroui/react";

const DeleteAlert = ({ booking }) => {
    return (
        <div>
             <AlertDialog>
      <Button variant="outline" className={'text-[#BA1A1A] border border-[#BA1A1A]/30 font-medium text-sm rounded-2xl'}>Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete appointment permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete your appointment with <strong>{booking.doctorName}</strong> scheduled on <strong>{new Date(booking.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',    
                    year: 'numeric'
                })}</strong>. This action cannot be undone. Are you sure you want to proceed?
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger">
                Delete Appointment
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
        </div>
    );
};

export default DeleteAlert;