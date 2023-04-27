class Gate {
    open(): void {
        servos.P0.setAngle(180);
    }

    close(): void {
        servos.P0.setAngle(90);
    }
}