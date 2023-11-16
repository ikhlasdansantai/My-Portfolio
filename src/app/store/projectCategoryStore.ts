import { create } from "zustand";

type projectState = {
  projCateFilters: string | any;
  setProjectCateFilters: any;
  projects: null | any;
  showProjDetail: boolean;
  getProjectDetail: any;
  setProjectDetail: any;
  setShowProjDetail: any;
  fetchingProject: any;
};

export const useProjectStore = create<projectState>((set) => ({
  projCateFilters: "semua kategori",
  setProjectCateFilters: (newFilter: string) => {
    set({ projCateFilters: newFilter });
  },
  projects: null,
  showProjDetail: false,
  getProjectDetail: null,
  setProjectDetail: (projectObj: any) => {
    set({ getProjectDetail: projectObj });
  },
  setShowProjDetail: (bool: boolean) => {
    set({ showProjDetail: bool });
  },
  fetchingProject: async (url: any) => {
    try {
      const res = await fetch(url, {
        cache: "no-store",
      });
      if (!res.ok) console.error("Server internal error");
      else {
        set({ projects: await res.json() });
      }
    } catch (e) {
      console.error(e);
    }
  },
}));
