export const transcribeElevenLabs = async (apiKey: string, file: File): Promise<string> => {
        const formData = new FormData();
        formData.append('file', file);

        const res = await fetch('https://api.elevenlabs.io/v1/speech-to-text', {
                method: 'POST',
                headers: {
                        'xi-api-key': apiKey
                },
                body: formData
        });

        if (!res.ok) {
                throw new Error('Failed to transcribe audio with ElevenLabs');
        }

        const data = await res.json();
        return data.text || data.transcription || '';
};
