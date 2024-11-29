---
modified: 2024-02-15 04:10 AM +07:00
created: 2024-02-15 02:54 AM +07:00
---
#cs/ai/ml 

# what
A simple format for 
- storing tensor safely (as opposed to pickle)
- still fast (zero-copy)

# properties
see https://github.com/huggingface/safetensors?tab=readme-ov-file#yet-another-format-
- [v] Safe
	- Can I use a file randomly downloaded and expect not to run arbitrary code ?
- [v] Zero-copy
	- Does reading the file require more memory than the original file ?
- [v] doing that 
- [v] Lazy loading
	- Can I inspect the file without loading everything ? And loading only some tensors in it without scanning the whole file (distributed setting) ?
- [v] Layout control
	- Lazy loading is not necessarily enough since if the information about tensors is spread out in your file, then even if the information is lazily accessible you might have to access most of your file to read the available tensors (incurring many DISK → RAM copies). 
	- Controlling the layout to keep fast access to single tensors is important.
- [v] No file size limit:
	- Is there a limit to the file size ?
- [-] Flexibility
	- Can I save custom code in the format and be able to use it later with zero extra code ? (~ means we can store more than pure tensors, but no custom code)
- [v] Bfloat16/Fp8
	- Does the format support native bfloat16/fp8 (meaning no weird workarounds are necessary)? This is becoming increasingly important in the ML world.