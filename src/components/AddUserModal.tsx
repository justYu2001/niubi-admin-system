import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CgClose } from "react-icons/cg";

interface AddUserModalProps {
    open: boolean;
    onClose: () => void;
}

export default function AddUserModal({ open, onClose }: AddUserModalProps) {
    return (
        <Transition show={open} as={Fragment}>
            <Dialog as="div" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out md:duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in md:duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 flex items-center justify-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="top-full md:top-auto md:scale-95"
                        enterTo="top-32 md:top-auto md:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 top-32 md:top-auto md:scale-100"
                        leaveTo="opacity-0 top-full md:top-auto md:scale-95"
                    >
                        <Dialog.Panel className="absolute left-0 right-0 bottom-0 rounded-t-[36px] bg-white md:left-auto md:right-auto md:bottom-auto md:w-3/5 md:rounded-2xl">
                            <Dialog.Title
                                as="div"
                                className="flex flex-col md:flex-row-reverse md:justify-between"
                            >
                                <CgClose
                                    className="mt-6 mr-6 cursor-pointer self-end text-2xl text-red-500 transition-all duration-300 md:m-4 md:self-auto md:text-black md:hover:text-red-600"
                                    onClick={onClose}
                                />
                                <h3 className="my-2 text-center text-2xl font-bold tracking-wide md:my-6 md:mx-8">
                                    新增使用者
                                </h3>
                            </Dialog.Title>

                            <div className="px-6 md:px-8">
                                <Input
                                    id="email"
                                    filedName="電子郵件地址"
                                    required={true}
                                />
                                <Input
                                    id="name"
                                    filedName="使用者名稱"
                                    required={true}
                                />
                                <Input
                                    id="password"
                                    filedName="密碼"
                                    required={true}
                                />
                                <Input id="address" filedName="地址" />
                                <button
                                    type="submit"
                                    className="my-8 w-full rounded bg-sky-400 py-4 text-lg font-medium tracking-wide text-white md:float-right md:w-auto md:py-2 md:px-6 md:text-sm md:font-normal"
                                >
                                    新增
                                </button>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}

interface InputProps {
    id: string;
    filedName: string;
    required?: boolean;
}

const Input = ({ id, filedName, required }: InputProps) => {
    return (
        <div className="my-2 flex flex-col-reverse">
            <input
                tabIndex={-1}
                id={id}
                type="text"
                className="peer w-full rounded border-2 border-gray-300 px-3 py-2 text-lg outline-none transition-all duration-300 focus:border-sky-400"
            />
            <label
                htmlFor={id}
                className="my-1 tracking-wide text-gray-400 transition-all duration-300 peer-focus:text-sky-400"
            >
                {`${filedName} ${required ? "*" : ""}`}
            </label>
        </div>
    );
};
