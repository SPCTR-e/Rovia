import { ScreenTransition } from '@/components/ScreenTransition';
import { TransportContent } from '@/components/screens/TransportContent';
import React from 'react';

export default function TransportScreen() {
    return (
        <ScreenTransition associatedPath="/transport">
            <TransportContent />
        </ScreenTransition>
    );
}
