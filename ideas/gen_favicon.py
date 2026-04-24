import os
from google import genai
from google.genai import types

os.environ['GEMINI_API_KEY'] = 'AIzaSyBWx3KxgqzwfX8W3m-duk6XyBvzNriCNe8'

client = genai.Client(api_key=os.environ['GEMINI_API_KEY'])

response = client.models.generate_content(
    model='gemini-3-pro-image-preview',
    contents=[
        'Create a minimalist, professional favicon for SovereignLLM - a B2B SaaS for on-premise custom LLM training. '
        'Design: Abstract S letterform integrated with a shield icon, symbolizing security and data sovereignty. '
        'Style: Clean, geometric, modern tech logo. Dark background with purple and blue gradient accent. '
        'Format: Square, simple, recognizable at 16x16px and larger. No text.'
    ],
    config=types.GenerateContentConfig(
        response_modalities=['TEXT', 'IMAGE'],
        image_config=types.ImageConfig(aspect_ratio='1:1', image_size='1K')
    ),
)

print(f'Response: {response}')

for part in response.parts:
    print(f'Part type: {type(part)}')
    if part.inline_data:
        img = part.as_image()
        img.save('sovereignllm/favicon.jpg')
        print('Saved: sovereignllm/favicon.jpg')
    if part.text:
        print(f'Text: {part.text}')
