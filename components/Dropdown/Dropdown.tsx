import * as React from 'react';
import { usePopper } from 'react-popper';

const Dropdown = ({ refElement, children }: any) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [popperElement, setPopperElement] = React.useState<any>(null);

    const { styles, attributes } = usePopper(refElement, popperElement, {
        placement: 'bottom-end',
    });

    React.useEffect(() => {
        if (refElement) {
            refElement.addEventListener('click', () => {
                setIsOpen(!isOpen);
            });
        }
    }, [refElement, isOpen, popperElement]);

    React.useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (refElement && !refElement.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [refElement]);

    return isOpen ? (
        <div
            ref={setPopperElement}
            style={{ ...styles.popper, zIndex: 1000 }}
            {...attributes.popper}
        >
            {children}
        </div>
    ) : null;
};

export default Dropdown;
