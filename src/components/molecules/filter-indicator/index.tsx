import React from 'react';
import { Formik, Form, Field } from 'formik';
import './filter-indicator.scss'
import { Button } from '../../atoms/button/Button';

interface FilterModalValues {
    organization: string;
    username: string;
    email: string;
    date: string;
    phone: string;
    status: string;
}

interface FilterModalProps {
    index?: number;
}

const FilterModal: React.FC<FilterModalProps> = ({ index = 0 }) => {
    const initialValues: FilterModalValues = {
        organization: '',
        username: '',
        email: '',
        date: '',
        phone: '',
        status: '',
    };

    const onSubmit = (values: FilterModalValues) => {
        if (values) {
            console.log(values);
        }
    };

    const handleReset = (resetForm: () => void) => {
        resetForm();
    };

    const formClassName = index === 0
        ? 'filter-form left-align'
        : 'filter-form';

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {({ resetForm }) => (
                <Form data-testid='filter-form' className={formClassName}>
                    <div className="form-group">
                        <label htmlFor="organization">Organization</label>
                        <Field as="select" name="organization" id="organization">
                            <option value="">Select</option>
                        </Field>
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <Field
                            type="text"
                            name="username"
                            id="username"
                            placeholder="User"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <Field
                            type="date"
                            name="date"
                            id="date"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <Field
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Phone Number"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <Field as="select" name="status" id="status">
                            <option value="">Select</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="pending">Pending</option>
                            <option value="blacklisted">Blacklisted</option>
                        </Field>
                    </div>

                    <div className="button-group">
                        <Button variant='outline' onClick={() => handleReset(resetForm)}>
                            Reset
                        </Button>
                        <Button type='submit' variant='primary'>
                            Filter
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default FilterModal;